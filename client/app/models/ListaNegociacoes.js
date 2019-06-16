class ListaNegociacoes
{
    constructor(subscription)
    {
        this._negociacoes = [];
        this._subscription = subscription;
    }

    get negociacoes()
    {
        return [].concat(this._negociacoes);
    }
    
    adiciona(negociacao)
    {
        this._negociacoes.push(negociacao);
        this._subscription(this)
    }

    esvazia()
    {
        this._negociacoes = [];
        this._subscription(this)
    }

}