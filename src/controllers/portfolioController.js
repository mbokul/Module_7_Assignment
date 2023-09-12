const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Portfolio Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Portfolio Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Portfolio Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Portfolio Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
