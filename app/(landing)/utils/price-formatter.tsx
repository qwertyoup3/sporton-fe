const priceFormatter = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 3,
    }).format(price);
};

export default priceFormatter;