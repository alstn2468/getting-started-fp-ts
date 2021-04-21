module.exports = {
  createInterface: jest.fn().mockReturnValue({
    question: jest.fn().mockImplementationOnce((questionText, cb) => {
      cb('success');
    }),
    close: () => undefined,
  }),
};
