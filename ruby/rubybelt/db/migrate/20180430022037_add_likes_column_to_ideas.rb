class AddLikesColumnToIdeas < ActiveRecord::Migration
  def change
    add_column :ideas, :likes, :integer
  end
end
