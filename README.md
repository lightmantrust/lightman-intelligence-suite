# The Lightman Intelligence Suite

<pre>
  <b>L I G H T M A N</b>
  TRUST   GROUP
</pre>

A cognitive enterprise dashboard built with Next.js and Supabase. Lightman provides a single, real-time, interactive interface to manage clients, track tasks, and gain AI-driven insights to improve efficiency and service.



---

## ➤ Core Features

*   **Secure Authentication**: User registration and login managed by Supabase Auth, with data protected by Row Level Security (RLS).
*   **Real-time Client Management**: A full CRUD interface to manage your client list, with data updated instantly from a PostgreSQL database.
*   **Nexus Task Board**: Create, assign, and track tasks related to specific clients in an interactive system.
*   **DeepSeek AI Insights**: An integrated AI engine (a Supabase Edge Function) that analyzes client data and provides actionable, solution-oriented recommendations on demand.

---

## ➤ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (React)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Backend & Database**: [Supabase](https://supabase.io/)
    *   PostgreSQL Database
    *   User Authentication
    *   Instant APIs
    *   Edge Functions (Deno/TypeScript)

---

## ➤ Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

*   **Node.js**: v18.x or later
*   **npm** or **yarn**
*   **Git**
*   A free [Supabase Account](https://supabase.com/dashboard)
*   [Supabase CLI](https://supabase.com/docs/guides/cli) installed on your machine.

### 1. Clone the Repository

First, clone the project to your local machine.

```bash
git clone https://github.com/your-username/lightman-intelligence-suite.git
cd lightman-intelligence-suite
