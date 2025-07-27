# The Lightman Intelligence Suite

The Lightman Intelligence Suite is a cognitive enterprise dashboard built with Next.js and Supabase. It provides a single, real-time, interactive interface to manage clients, tasks, and gain AI-driven insights.

## Tech Stack

-   **Frontend:** [Next.js](https://nextjs.org/) (React Framework)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Backend & Database:** [Supabase](https://supabase.io/)
    -   PostgreSQL Database
    -   Authentication
    -   Auto-generated APIs
    -   Realtime Subscriptions
    -   Edge Functions (Deno/TypeScript)

## Project Setup

### 1. Create a Supabase Project

1.  Go to [supabase.com](https://supabase.com) and create a new project.
2.  Navigate to the **SQL Editor** in your Supabase project dashboard.
3.  Open the `supabase/migrations/20231027000000_initial_schema.sql` file from this project.
4.  Copy its content and paste it into the Supabase SQL Editor. Click **"Run"**. This will create your tables and security policies.

### 2. Set Up Environment Variables

1.  In your Supabase project, go to **Project Settings > API**.
2.  Find your **Project URL** and your `anon` **public** key.
3.  In the `frontend` directory, create a new file named `.env.local`.
4.  Add your Supabase credentials to it:

    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```

### 3. Install Dependencies and Run the App

```bash
cd frontend
npm install
npm run dev
