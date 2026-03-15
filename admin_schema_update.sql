-- Script to update the profiles table for the Admin Panel and progress tracking

-- 1. Add 'role' column to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin'));

-- 2. Add 'completed_lessons' JSONB array to store the IDs of completed lessons
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS completed_lessons JSONB DEFAULT '[]'::jsonb;

-- 3. We also need to make sure the users can update their own streak and score
-- Ensure RLS policies on `profiles` allow users to UPDATE their own row (already exists in schema.sql but let's be safe)
DROP POLICY IF EXISTS "Users can update their own profile." ON public.profiles;
CREATE POLICY "Users can update their own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 4. Create Policy for Admins to view ALL profiles
-- FIX: Avoid infinite recursion by not querying 'profiles' directly in the policy check.
-- We create a SECURITY DEFINER function that bypasses RLS to check the role.

CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = user_id AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT 
USING ( public.is_admin(auth.uid()) );

-- Instalar esta actualización en Supabase corriendo este archivo completo en SQL Editor -- 
-- Para hacerte administrador ejecuta manualmente: UPDATE public.profiles SET role = 'admin' WHERE id = 'tu_uuid_aqui';
