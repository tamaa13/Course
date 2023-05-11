const moneyFormattedIdr = (money) => {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 2 }
    ).format(money);
}

module.exports = {moneyFormattedIdr}