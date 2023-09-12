const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Message Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Message Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Message Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      message: 'Message Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
