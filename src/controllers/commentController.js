const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Comment Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Comment Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Comment Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Comment Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
