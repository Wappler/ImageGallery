
exports.up = function(knex) {
  return knex.schema
    .table('gallery_images', async function (table) {
      table.integer('image_index');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('gallery_images', async function (table) {
      table.dropColumn('image_index');
    })
};
