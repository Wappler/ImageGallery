
exports.up = function(knex) {
  return knex.schema
    .createTable('galleries', async function (table) {
      table.increments('id');
      table.string('gallery', 50);
      table.text('description');
    })
    .createTable('gallery_images', async function (table) {
      table.increments('id');
      table.string('image', 50);
      table.integer('gallery_id').unsigned();
      table.foreign('gallery_id').references('id').inTable('galleries').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('gallery_images')
    .dropTable('galleries')
};
