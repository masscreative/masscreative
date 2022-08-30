var $table = $("#table");
$(function () {
  $table.bootstrapTable({ data: products });
  $table.bootstrapTable('filterBy', {
        category: "Software Windows"
      })
});
