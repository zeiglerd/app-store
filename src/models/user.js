const db = require('./db')

exports.create = (payload, success, error) => {
  // Create user
  db.user.create(payload).then(success).catch(error)
}

exports.destroy = (payload, success, error) => {
  // Destroy user by id
  db.user.destroy({
    'where': {
      'id': payload.id
    }
  }).then(success).catch(error)
}

exports.find = (payload, success, error) => {
  // Find user by id
  db.user.find({
    'where': {
      'id': payload.id
    }
  }).then(success).catch(error)
}

exports.findAll = (success, error) => {
  // Find all users
  db.user.findAll().then(success).catch(error)
}

exports.update = (payload, success, error) => {
  // Check user exists by id
  db.user.find({
    'where': {
      'id': payload.id
    }
  }).then( (existingData) => {
    // Update user by id
    existingData.updateAttributes(payload).then(success).catch(error)
  }).catch(error)
}
