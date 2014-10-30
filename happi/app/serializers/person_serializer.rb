class PersonSerializer < ActiveModel::Serializer
  attributes :name, :photoUrl, :githubUsername

  def photoUrl
    object.photo_url
  end

  def githubUsername
    object.github_username
  end
end
