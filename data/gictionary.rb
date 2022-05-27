require 'json'

data = File.read("Gictionary.json")
json = JSON.parse(data)
json["pages"].each { |page|
  word = page["title"]
  word.gsub!(/\*/,'')
  puts word
}




