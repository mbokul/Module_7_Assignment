const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Product Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Product Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Product Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Product Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
