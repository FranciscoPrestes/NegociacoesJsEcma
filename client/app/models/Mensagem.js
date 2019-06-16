class Mensagem {
   
    constructor(subscription,texto = '') {
        this._texto = texto;
        this._subscription = subscription;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
        this._subscription(this);
    }
}