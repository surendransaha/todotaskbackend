module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      toDo: String,
      status: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Todo = mongoose.model("todo", schema);
  return Todo;
};
