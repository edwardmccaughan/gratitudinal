require "application_system_test_case"

class GratitudesTest < ApplicationSystemTestCase
  setup do
    @gratitude = gratitudes(:one)
  end

  test "visiting the index" do
    visit gratitudes_url
    assert_selector "h1", text: "Gratitudes"
  end

  test "creating a Gratitude" do
    visit gratitudes_url
    click_on "New Gratitude"

    fill_in "Body", with: @gratitude.body
    fill_in "User", with: @gratitude.user_id
    click_on "Create Gratitude"

    assert_text "Gratitude was successfully created"
    click_on "Back"
  end

  test "updating a Gratitude" do
    visit gratitudes_url
    click_on "Edit", match: :first

    fill_in "Body", with: @gratitude.body
    fill_in "User", with: @gratitude.user_id
    click_on "Update Gratitude"

    assert_text "Gratitude was successfully updated"
    click_on "Back"
  end

  test "destroying a Gratitude" do
    visit gratitudes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Gratitude was successfully destroyed"
  end
end
