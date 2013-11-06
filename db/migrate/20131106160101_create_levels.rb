class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.integer :level
      t.text :description
      t.integer :num_smoothies_needed

      t.timestamps
    end
  end
end
