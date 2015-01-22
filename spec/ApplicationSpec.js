describe("Application", function() {
    var application = new Application();

    it("should do what I specify", function() {

      var expected = null;
      var actual = application.myFunction();

      expect( expected ).toBe( actual );

    });
});
