//@desc Get All contacts
//@route  GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "GeT all contacts" });
};

//@desc Get id contacts
//@route  GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact ${req.params.id}` });
};

//@desc Create New contacts
//@route POST Create /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new console.error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create Contact" });
};

//@desc Update contacts
//@route PUT Create /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact ${req.params.id}` });
};

//@desc Delete contacts
//@route Delete Create /api/contacts
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
