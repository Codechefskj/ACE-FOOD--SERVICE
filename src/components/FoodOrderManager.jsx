import { useEffect, useState } from "react";

const FoodOrderManager = () => {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    orderId: "",
    restaurantName: "",
    itemCount: "",
    isPaid: false,
    deliveryDistance: "",
  });

  const [statusFilter, setStatusFilter] = useState("all");
  const [distanceFilter, setDistanceFilter] = useState("");
  const [assignDistance, setAssignDistance] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addOrder = () => {
    if (
      !formData.orderId ||
      !formData.restaurantName ||
      !formData.itemCount ||
      !formData.deliveryDistance
    ) {
      alert("Fill all fields");
      return;
    }

    setOrders([
      ...orders,
      {
        ...formData,
        itemCount: Number(formData.itemCount),
        deliveryDistance: Number(formData.deliveryDistance),
      },
    ]);

    setFormData({
      orderId: "",
      restaurantName: "",
      itemCount: "",
      isPaid: false,
      deliveryDistance: "",
    });
  };

  const assignDelivery = () => {
    const maxDistance = Number(assignDistance);

    const eligibleOrders = orders
      .filter(
        (order) =>
          !order.isPaid && order.deliveryDistance <= maxDistance
      )
      .sort((a, b) => a.deliveryDistance - b.deliveryDistance);

    if (eligibleOrders.length === 0) {
      setOutput("No order available");
      return;
    }

    setOutput(
      `Assigned Order: ${eligibleOrders[0].orderId} (${eligibleOrders[0].restaurantName})`
    );
  };

  const filteredOrders = orders.filter((order) => {
    const statusMatch =
      statusFilter === "all"
        ? true
        : statusFilter === "paid"
        ? order.isPaid
        : !order.isPaid;

    const distanceMatch =
      distanceFilter === ""
        ? true
        : order.deliveryDistance <= Number(distanceFilter);

    return statusMatch && distanceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Food Order Manager
      </h1>

      {/* ADD ORDER */}

      <div className="bg-white p-6 rounded shadow mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Add Order
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            placeholder="Order ID"
            className="border p-3 rounded"
          />

          <input
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Restaurant Name"
            className="border p-3 rounded"
          />

          <input
            name="itemCount"
            value={formData.itemCount}
            onChange={handleChange}
            placeholder="Item Count"
            type="number"
            className="border p-3 rounded"
          />

          <input
            name="deliveryDistance"
            value={formData.deliveryDistance}
            onChange={handleChange}
            placeholder="Distance"
            type="number"
            className="border p-3 rounded"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.isPaid}
              name="isPaid"
              onChange={handleChange}
            />
            Paid Order
          </label>

        </div>

        <button
          onClick={addOrder}
          className="bg-green-600 text-white px-6 py-3 mt-4 rounded"
        >
          Add Order
        </button>
      </div>

      {/* FILTER */}

      <div className="bg-white p-6 rounded shadow mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Filter Orders
        </h2>

        <div className="flex gap-4">

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="border p-3 rounded"
          >
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>

          <input
            type="number"
            placeholder="Max Distance"
            value={distanceFilter}
            onChange={(e) =>
              setDistanceFilter(e.target.value)
            }
            className="border p-3 rounded"
          />
        </div>
      </div>

      {/* ASSIGN */}

      <div className="bg-white p-6 rounded shadow mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Assign Delivery
        </h2>

        <div className="flex gap-4">

          <input
            type="number"
            placeholder="Enter Distance"
            value={assignDistance}
            onChange={(e) =>
              setAssignDistance(e.target.value)
            }
            className="border p-3 rounded"
          />

          <button
            onClick={assignDelivery}
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Assign Delivery
          </button>
        </div>
      </div>

      {/* OUTPUT */}

      <div className="bg-yellow-100 p-6 rounded shadow mb-8">
        <h2 className="text-xl font-bold">
          Output
        </h2>

        <p className="mt-3 text-lg">
          {output}
        </p>
      </div>

      {/* ORDER LIST */}

      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-2xl font-bold mb-4">
          All Orders
        </h2>

        <table className="w-full border">

          <thead>
            <tr>
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Restaurant</th>
              <th className="border p-2">Items</th>
              <th className="border p-2">Paid</th>
              <th className="border p-2">Distance</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.orderId}>
                <td className="border p-2">{order.orderId}</td>
                <td className="border p-2">
                  {order.restaurantName}
                </td>
                <td className="border p-2">
                  {order.itemCount}
                </td>
                <td className="border p-2">
                  {order.isPaid ? "Yes" : "No"}
                </td>
                <td className="border p-2">
                  {order.deliveryDistance} KM
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default FoodOrderManager;