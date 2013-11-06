json.array!(@levels) do |level|
  json.extract! level, :level, :description, :num_smoothies_needed
  json.url level_url(level, format: :json)
end
