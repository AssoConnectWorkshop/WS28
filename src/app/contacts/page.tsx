import { getContacts } from "@/lib/assoconnect";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  let contacts;
  let total = 0;
  let error: string | null = null;

  try {
    const data = await getContacts();
    contacts = data["hydra:member"];
    total = data["hydra:totalItems"];
  } catch (e) {
    error = e instanceof Error ? e.message : "Erreur inconnue";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-1">Contacts</h1>
        {!error && (
          <p className="text-sm text-gray-500 mb-6">
            10 premiers sur {total} au total
          </p>
        )}

        {error ? (
          <div className="border border-red-200 bg-red-50 rounded-xl p-6 text-red-700 text-sm">
            {error}
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {contacts?.map((contact, i) => {
              const name =
                contact.type === "person"
                  ? [contact.firstname, contact.lastname].filter(Boolean).join(" ")
                  : contact.lastname ?? "—";
              return (
                <li
                  key={contact["@id"]}
                  className="flex items-center gap-4 border rounded-xl px-5 py-4"
                >
                  <span className="text-sm text-gray-400 w-6 text-right">{i + 1}</span>
                  <span className="font-medium">{name || "—"}</span>
                  {contact.email && (
                    <span className="text-sm text-gray-500 ml-auto">{contact.email}</span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
