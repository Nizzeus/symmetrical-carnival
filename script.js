document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const teksti = document.getElementById('teksti').value;

    const createNote = async (teksti) => {
        teksti.id = crypto.randomUUID();

        const kv = await Deno.openKv();
        await kv.set(["notes", teksti.id], teksti);
    }
})