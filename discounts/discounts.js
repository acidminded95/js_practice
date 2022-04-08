const coupons = [
    {
        code:'bestiary',
        discount:25
    },
    {
        code:'terracotta',
        discount:15
    }, 
    {
        code:'spring22',
        discount: 10
    }
];

function calcDiscount(price, discount) {
    const final_price = (price / 100) * (100 - discount);
    return final_price;
}

function getDiscount() {
    const price = document.getElementById("price-input").value;
    const disc = document.getElementById("discount-input").value;
    
    var finalPrice = calcDiscount(price, disc);

    const userCoupon = document.getElementById("coupon-input").value;
    const isCouponValid = function (coupon) {
        return coupon.code === userCoupon;
    }

    if (userCoupon === '') {
        var finalPrice = finalPrice;
        console.log('No coupon added.')
    } else {
        const selectedCoupon = coupons.find(isCouponValid);

        if (!selectedCoupon) {
            alert(`The coupon '${userCoupon}' is not valid. Please try a valid coupon.`);
        } else {
            const secondDisc = selectedCoupon.discount;
            var finalPrice = calcDiscount(finalPrice, secondDisc);
        }
    
    }

    const fp_placeholder = document.getElementById("final-price");
    fp_placeholder.innerText = `Your final price is: $${finalPrice}`;
}