import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = useCallback((product, quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...currentItems, { ...product, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((currentItems) =>
      currentItems.filter(item => item.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setItems((currentItems) =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const value = useMemo(() => ({
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount
  }), [items, addItem, removeItem, updateQuantity, clearCart, getCartTotal, getItemCount]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartStore() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartStore must be used within a CartProvider');
  }
  return context;
}
