const supabaseUrl = "https://ykqbvjbufjfxzfripvsc.supabase.co";
const supabaseKey = "sb_publishable_eL3hNCXeks12CHT4oC-p3g_id2GwoV3";

window.supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

console.log("✅ Supabase Connected");
