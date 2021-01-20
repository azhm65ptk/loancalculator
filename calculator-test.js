
it('should calculate the monthly rate correctly', function () {
  const values={
    amount:10000,
    years: 8,
    rate: 5.8,
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  
  const values={
    amount:40000,
    years: 6,
    rate: 3,
  }
  expect(calculateMonthlyPayment(values)).toEqual('607.75');
});

it("should handle hight interest rate ", function() {
  const values={
    amount:10000,
    years: 1,
    rate: 99,
  }
  expect(calculateMonthlyPayment(values)).toEqual('1344.19');
  
});

it('should handle  a very small loan for short term', function () {
  const values={
    amount:50,
    years: 0.5,
    rate: 2,
  }
  expect(calculateMonthlyPayment(values)).toEqual('8.38');
});