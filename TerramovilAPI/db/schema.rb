# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180426213941) do

  create_table "accessories", force: :cascade do |t|
    t.string "brand"
    t.string "model"
    t.string "type"
    t.string "description"
    t.integer "price"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entries", force: :cascade do |t|
    t.date "date"
    t.integer "amount"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "repairs", force: :cascade do |t|
    t.date "date"
    t.string "deviceDescription"
    t.string "problem"
    t.integer "price"
    t.integer "replacement_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["replacement_id"], name: "index_repairs_on_replacement_id"
    t.index ["user_id"], name: "index_repairs_on_user_id"
  end

  create_table "replacements", force: :cascade do |t|
    t.string "brand"
    t.string "model"
    t.string "type"
    t.string "description"
    t.integer "price"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sales", force: :cascade do |t|
    t.date "date"
    t.integer "price"
    t.integer "accessory_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["accessory_id"], name: "index_sales_on_accessory_id"
    t.index ["user_id"], name: "index_sales_on_user_id"
  end

  create_table "spendings", force: :cascade do |t|
    t.date "date"
    t.integer "amount"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "lastName"
    t.integer "celphone"
    t.string "user"
    t.string "password"
    t.string "rol"
    t.string "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end