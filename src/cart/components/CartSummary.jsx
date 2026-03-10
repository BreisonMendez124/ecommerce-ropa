import Button from "../../components/button/Button";

export default function CartSummary({ subtotal, shipping = 5.99, onCheckout }) {
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Resumen del pedido</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Envío</span>
          <span className="font-semibold">${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-800">
          <span>Total</span>
          <span className="text-purple-600">${total.toFixed(2)}</span>
        </div>
      </div>

      <Button
        onClick={onCheckout}
        className="w-full"
        size="lg"
      >
        Proceder al pago
      </Button>

      <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span>Pago seguro</span>
      </div>
    </div>
  );
}
