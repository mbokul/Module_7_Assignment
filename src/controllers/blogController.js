const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Blog Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Blog Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Blog Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Blog Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
