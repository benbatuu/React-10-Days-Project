// Reducer fonksiyonu, state ve action nesnelerini alır ve state'i günceller.
const reducer = (state, action) => {
  switch (action.type) {
    // Eğer action.type "ADD_ITEM_IN_CART" ise, sepete yeni bir öğe eklenir.
    case "ADD_ITEM_IN_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };

    // Eğer action.type "REMOVE_ITEM_IN_CART" ise, sepetten belirtilen öğe çıkarılır.
    case "REMOVE_ITEM_IN_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    // Eğer action.type "CLEAR_CART" ise, sepet temizlenir (tüm öğeler çıkarılır).
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // Eğer action.type "ADD_ITEM_IN_ORDER" ise, yeni bir sipariş öğesi eklenir.
    case "ADD_ITEM_IN_ORDER":
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };

    // Eğer action.type "REMOVE_ITEM_IN_ORDER" ise, belirtilen sipariş öğesi çıkarılır.
    case "REMOVE_ITEM_IN_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order.orderId !== action.payload.id),
      };

    // Tanımlanmayan bir action tipi gönderildiğinde, state'i değiştirmeden geri döndürür.
    default:
      return state;
  }
};

export default reducer;
