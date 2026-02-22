module.exports = async function (context, req) {
    const name = (req.body && req.body.name) || "Anonymous";
    context.res = {
        status: 200,
        body: "Hello " + name + "! Your message was successfully processed by the Azure Function."
    };
};
