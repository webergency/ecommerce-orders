const Order = require('./classes/order');
const Claim = require('./classes/claim');
const Shipment = require('./classes/shipment');
const Customer = require('./classes/customer');
const Flow = require('@liqd-js/flow');
const OrdersCore = require('./core/Orders');

const Orders = module.exports = class Pages
{
    #options; #ctx;

    constructor( options )
    {
        this.#options = options;
        this.#ctx =
            {
                company: Object.freeze( options.company || {}),
                locale: options.locale,
                core: new PagesCore({ webroot: options.webroot }),
                flow: new Flow('@webergency/orders')
            };
    }

    get flow()
    {
        return this.#ctx.flow;
    }

    order( id )
    {
        return Order.get( this.#ctx, id );
    }

    claim( id )
    {
        return Claim.get( this.#ctx, id );
    }

    shipment( id )
    {
        return Shipment.get( this.#ctx, id );
    }

    customer( id )
    {
        return Customer.get( this.#ctx, id );
    }
}