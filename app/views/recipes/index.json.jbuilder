json.array!(@recipes) do |recipe|
  json.extract! recipe, :name, :level_id
  json.url recipe_url(recipe, format: :json)
end
