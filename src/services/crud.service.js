class CrudService {
  constructor(model) {
    this.model = model;
  }
  async add(payload) {
    return await this.model.create(payload);
  }
  async newCode(payload) {
    try {
      return await this.model.updateOne(
        {
          email: payload.email,
        },
        {
          $set: {
            verification_code: payload.code,
            expire_date: moment(Date.now()).add(5, "m").toDate(),
          },
        }
      );
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }

  async updateEmailStatus(payload) {
    try {
      const { email } = payload;
      return await this.model.findOneAndUpdate(
        { email },
        {
          $set: {
            email_active: true,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async update(payload, id, message) {
    const model = await this.model.findByIdAndUpdate(id, payload, {
      new: true,
    });
    if (!model) {
      throw createError(200, message);
    }
    return model;
  }

  async getDocumentById(id, notFoundMessage) {
    const model = await this.model.findById(id);
    if (!model) {
      throw createError(200, notFoundMessage);
    } else {
      return model;
    }
  }
  async getDocumentByEmail(payload) {
    try {
      //const { email } = payload;
      payload.email = payload.email.toString().toLowerCase();
      return await this.model.findOne({ email: payload.email });
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async getDocumentByUserName(payload) {
    try {
      return await this.model.findOne({
        user_name: payload.user_name,
      });
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async getDocumentByToken(payload) {
    try {
      return await this.model.findOne({
        jwt_token: payload.token,
      });
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async getList() {
    try {
      return await this.model.find({});
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async deleteById(id) {
    return await this.model.findByIdAndDelete(id);
  }

  async addUser(object, invitedUser) {
    const count = await this.model.find().count();
    if (count > 100) {
      if (invitedUser) {
        object = {
          ...object,
          status: "active",
        };
      } else {
        object = {
          ...object,
          status: "waiting",
        };
      }
    } else {
      object = {
        ...object,
        status: "active",
      };
    }
    const newUser = this.model(object);
    return await newUser.save();
  }

  async updateJWT(payload) {
    try {
      const { _id, token } = payload;
      return await this.model.findOneAndUpdate(
        { _id },
        {
          $set: {
            token: token,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async updateJWTFlag(payload) {
    try {
      return await this.model.findOneAndUpdate(
        { _id: payload._id },
        {
          $set: {
            jwt_flag: payload.flag,
          },
        },
        {
          new: true,
        }
      );
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async getSingleDocument(payload) {
    try {
      return await this.model.findOne(payload);
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async getAllDocument() {
    try {
      return await this.model.find();
    } catch (error) {
      console.log(error);
      throw createError(500);
    }
  }
  async updateDocumentByKeySet(condition, updateValue) {
    try {
      console.log(condition);
      return await this.model.updateMany(
        condition,
        {
          $set: updateValue,
        },
        {
          upsert: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async getDocumentByKey(payload) {
    try {
      return await this.model.find(payload).sort({ _id: -1 });
    } catch (error) {
      console.log(error);
    }
  }
}
exports.CrudService = CrudService;
