import Button from "../../components/button/Button";

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-purple-600 font-bold">${item.price}</p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => onUpdateQuantity(item.id, -1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold transition-colors"
        >
          -
        </button>
        <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, 1)}
          className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center font-bold transition-colors"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </Button>
    </div>
  );
}
