import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import { User } from '@supabase/supabase-js';

// Dummy ClientList component for structure - create the real one next
const ClientList = () => <div>Your client list will appear here.</div>;

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    };
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          router.push('/');
        }
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <header className="bg-black/30 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-widest text-white uppercase">
            LIGHTMAN <span className="font-light">SUITE</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="pt-12 container mx-auto px-6">
        {/* We will replace this with the real ClientList component soon */}
        <h1 className="text-3xl text-white font-bold my-6">Client Dashboard</h1>
        {/* Placeholder for ClientList component */}
        <p className="text-gray-400">Implement the ClientList component to see your data.</p>
      </main>
    </div>
  );
}
