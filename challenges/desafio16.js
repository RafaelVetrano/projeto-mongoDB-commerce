db.produtos.updateOne(
    { nome: "Big Mac" },
    {
        $currentDate: { ultimaModificacao: true },
    },
);

db.produtos.find({ nome: "Big Mac" }, { _id: 0, nome: 1 });