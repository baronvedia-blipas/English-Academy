import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let client;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('tu-proyecto')) {
  console.warn("Faltan variables de Supabase válidas. Usando cliente simulado (dummy) para evitar crashes de UI.");
  let authStateListener = null;
  let currentUser = null;

  client = {
    auth: {
      getSession: async () => ({ data: { session: currentUser ? { user: currentUser } : null } }),
      onAuthStateChange: (callback) => {
        authStateListener = callback;
        return { data: { subscription: { unsubscribe: () => { authStateListener = null; } } } };
      },
      signUp: async ({ email, password, options }) => {
        currentUser = { email, user_metadata: { username: options?.data?.username || 'Invitado' } };
        if (authStateListener) authStateListener('SIGNED_IN', { user: currentUser });
        return { data: { user: currentUser }, error: null };
      },
      signInWithPassword: async ({ email }) => {
        currentUser = { email, user_metadata: { username: email.split('@')[0] || 'Invitado' } };
        if (authStateListener) authStateListener('SIGNED_IN', { user: currentUser });
        return { data: { user: currentUser }, error: null };
      },
      signOut: async () => {
        currentUser = null;
        if (authStateListener) authStateListener('SIGNED_OUT', null);
        return { error: null };
      }
    }
  };
} else {
  client = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = client;
