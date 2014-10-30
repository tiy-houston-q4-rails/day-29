people = [
        {
            name: "Jesse Wolgamott",
            photoUrl: "https://avatars2.githubusercontent.com/u/123075?v=2&s=460",
            githubUsername: "@jwo"
        },
        {
            name: "Astrid",
            photoUrl: "https://avatars1.githubusercontent.com/u/7379011?v=2&s=460",
            githubUsername: "astridw"
        }
    ]

people.each do |hash|
  Person.create name: hash[:name], photo_url: hash[:photoUrl], github_username: hash[:githubUsername]
end

puts "Person.count: #{Person.count}"
