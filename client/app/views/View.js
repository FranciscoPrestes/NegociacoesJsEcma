class View
{
    constructor(element)
    {
        this._element = element;
    }

    template(model)
    {
        throw new Error("Método template precisa ser implementado");
    }

    update(model)
    {
        this._element.innerHTML = this.template(model);
    }
}