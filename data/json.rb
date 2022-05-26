require 'json'

file = ARGV[0]

unless file
  puts "specify a file"
  exit
end

unless File.exist?(file)
  puts 'File not found'
end

data = File.read(ARGV[0])
                 
json = JSON.parse(data)
json["pages"].each { |page|
  lines = page["lines"]
  lines.each { |line|
    line.gsub!(/\[http.*\]/,'')
    puts line
  }
}




