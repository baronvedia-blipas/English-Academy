# English Academy

¡Bienvenido al repositorio de **English Academy**! Esta es una aplicación web full-stack para hispanohablantes que desean aprender inglés americano de manera interactiva.

## 🚀 Tecnologías

*   **Frontend**: React + Vite
*   **Estilos**: Tailwind CSS + lucide-react
*   **Backend & Autenticación**: Supabase (PostgreSQL + Supabase Auth)
*   **Audio (TTS & Speech Recognition)**: Web Speech API (Nativa del navegador)
*   **Corrección de Escritura con IA**: Claude API (Anthropic)
*   **Hosting**: Vercel (Recomendado para el frontend)

## ⚙️ Configuración del Proyecto

Sigue estos pasos para levantar el entorno de desarrollo local:

### 1. Configurar Supabase
1. Ingresa a [Supabase](https://supabase.com/) y crea un nuevo proyecto (el plan Gratuito es más que suficiente para miles de usuarios).
2. Ve a la sección **SQL Editor** y pega todo el contenido del archivo `schema.sql` (ubicado en la raíz de este proyecto).
3. Asegúrate de ejecutar el script; esto creará las tablas necesarias (perfiles, niveles, lecciones, progreso, flashcards, etc.) junto con sus políticas de seguridad (RLS).
4. Ve a la sección **Authentication** y asegúrate de que el proveedor "Email" esté habilitado.

### 2. Variables de Entorno
1. Entra a la carpeta `frontend/`.
2. Crea un archivo llamado `.env` (puedes basarte en `.env.example` si existe) con el siguiente contenido:

```env
VITE_SUPABASE_URL=tu_supabase_project_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### 4. Instalación de Dependencias
Abre tu terminal, navega a la carpeta `frontend` y ejecuta:

```bash
cd frontend
npm install
```

### 5. Iniciar la Aplicación en Local
Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible típicamente en `http://localhost:5173/`.

---

## 🏗️ Estructura del Frontend

*   `/src/components/`: Componentes reutilizables, ejercicios interactivos.
*   `/src/pages/`: Vistas principales (Login, Dashboard, Lessons).
*   `/src/hooks/`: Hooks personalizados (`useAuth`, `useSpeech`, etc.).
*   `/src/lib/`: Configuración de clientes (Supabase, Claude).
*   `/src/content/`: Datos estáticos para las lecciones iniciales.

¡Disfruta aprendiendo y desarrollando!
