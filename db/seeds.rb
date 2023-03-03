puts "🌱 Seeding spices..."

# Seed your database here
10.times do
    User.create(
      email: Faker::Internet.email,
      password_digest: Faker::Internet.password,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name
    )
  end

  users = User.all
  users.each do |user|
    3.times do
        user.skills.create(
            name: Faker::Job.key_skill
        )
    end
  end
  User.all.each do |user|
    5.times do
      user.projects.create(
        title: Faker::Book.title,
        description: Faker::Lorem.paragraph_by_chars(number: 256),
        image_url: Faker::LoremFlickr.image(size: "50x60"),
        repo_url: Faker::Internet.url
      )
    end
  end

puts "✅ Done seeding!"
