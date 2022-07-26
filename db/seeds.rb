# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "🌱 Seeding activities..."

arr = []
100.times do
    activity = RestClient.get "http://www.boredapi.com/api/activity/"
    activity_hash = JSON.parse(activity)

    if !arr.include?(activity)
        Activity.create(
            name: activity_hash["activity"],
            activity_type: activity_hash["type"],
            participants: activity_hash["participants"],
            price: activity_hash["price"]
        )
    
        arr.append(activity)
    end
end

Preference.create(name: "education")
Preference.create(name: "recreational")
Preference.create(name: "social")
Preference.create(name: "diy")
Preference.create(name: "charity")
Preference.create(name: "cooking")
Preference.create(name: "relaxation")
Preference.create(name: "music")
Preference.create(name: "busywork")


puts "✅ Done seeding!"