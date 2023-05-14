

it('should calculate the monthly rate correctly', function () {
  expect(parseFloat(calculateMonthlyPayment({amount:5000, rate:4.15, years:5}))).toEqual(92.42)
  expect(parseFloat(calculateMonthlyPayment({amount:0, rate:4.15, years:5}))).toEqual(0.00)


});


it("should return a result with 2 decimal places", function() {
  expect(parseFloat(calculateMonthlyPayment({amount:5000, rate:4.15, years:5}))).toEqual(92.42)
  expect(parseFloat(calculateMonthlyPayment({amount:0, rate:4.15, years:5}))).toEqual(0.00)



});

/// etc
