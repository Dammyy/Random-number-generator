import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RandomNumbers from "./RandomNumbers";
import { mapDispatchToProps } from "./RandomNumbersContainer";
import { addNumbersToState, clearRandomNumbers } from "../../store/actions";

configure({ adapter: new Adapter() });

describe("Random numbers page", () => {
  it("should render Random Numbers Properly when unsorted", () => {
    const props = {
      randomNumbers: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersAsc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersDesc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      maximumNumber: "23456789",
      minimumNumber: "234567"
    };
    const wrapper = shallow(<RandomNumbers {...props} />);

    wrapper.instance().setState({
      generated: true
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should render Random Numbers Properly when sorted in ascending order", () => {
    const props = {
      randomNumbers: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersAsc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersDesc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      maximumNumber: "23456789",
      minimumNumber: "234567"
    };

    const wrapper = shallow(<RandomNumbers {...props} />);

    wrapper.instance().setState({
      sortType: "asc",
      generated: true
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should render Random Numbers Properly when sorted in descending order", () => {
    const props = {
      randomNumbers: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersAsc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersDesc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      maximumNumber: "23456789",
      minimumNumber: "234567"
    };

    const wrapper = shallow(<RandomNumbers {...props} />);

    wrapper.instance().setState({
      sortType: "desc",
      generated: true
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should display the page", () => {
    const props = {
      randomNumbers: [],
      randomNumbersAsc: [],
      randomNumbersDesc: [],
      maximumNumber: "",
      minimumNumber: ""
    };

    const wrapper = shallow(<RandomNumbers {...props} />);

    wrapper.instance().setState({
      generated: false
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should set state when handleChange is called", () => {
    const props = {
      randomNumbers: [],
      randomNumbersAsc: [],
      randomNumbersDesc: [],
      maximumNumber: "",
      minimumNumber: ""
    };

    const wrapper = shallow(<RandomNumbers {...props} />);

    const { handleChange } = wrapper.instance();
    handleChange({
      target: { value: 5 }
    });

    expect(wrapper.state().value).toEqual(5);
  });

  it("should set state when onSelectChange is called", () => {
    const props = {
      randomNumbers: [],
      randomNumbersAsc: [],
      randomNumbersDesc: [],
      maximumNumber: "",
      minimumNumber: ""
    };

    const wrapper = shallow(<RandomNumbers {...props} />);

    const { onSelectChange } = wrapper.instance();
    onSelectChange({
      target: { value: "asc" }
    });

    expect(wrapper.state().sortType).toEqual("asc");
  });

  it("should generate numbers when generateNumbers is called", () => {
    const props = {
      randomNumbers: [],
      randomNumbersAsc: [],
      randomNumbersDesc: [],
      maximumNumber: "",
      minimumNumber: "",
      addNumbersToState: jest.fn()
    };

    const wrapper = shallow(<RandomNumbers {...props} />);

    wrapper.instance().setState({
      value: 5
    });

    const { generateNumbers } = wrapper.instance();
    generateNumbers({
      preventDefault: jest.fn()
    });

    expect(wrapper.state().value).toEqual(5);
    expect(props.addNumbersToState).toHaveBeenCalled();
  });

  it("should call downloadNumbers when clicked", () => {
    const props = {
      randomNumbers: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersAsc: [],
      randomNumbersDesc: [],
      maximumNumber: "",
      minimumNumber: ""
    };
    global.URL.createObjectURL = jest.fn();
    const wrapper = shallow(<RandomNumbers {...props} />);
    const downloadButton = wrapper.find(".download-button");
    const { downloadNumbers } = wrapper.instance();
    downloadButton.simulate("click");
    downloadNumbers();

    expect(wrapper).toMatchSnapshot();
  });

  it("should call clearRandomNumbers when clicked", () => {
    const props = {
      randomNumbers: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersAsc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      randomNumbersDesc: [
        { number: "004956594304956" },
        { number: "55567634567654456" }
      ],
      maximumNumber: "23456789",
      minimumNumber: "234567",
      clearRandomNumbers: jest.fn()
    };

    const wrapper = shallow(<RandomNumbers {...props} />);

    wrapper.instance().setState({
      sortType: "desc",
      generated: true
    });

    const clearButton = wrapper.find(".clear-button");
    const { clearList } = wrapper.instance();
    clearButton.simulate("click");
    clearList();

    expect(wrapper.instance().state.sortType).toEqual('');
    expect(wrapper.instance().state.generated).toEqual(false);
    expect(wrapper.instance().state.value).toEqual('');
    expect(wrapper.instance().props.clearRandomNumbers).toHaveBeenCalled();
  });

  describe("mapDispatchToProps", () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    it("should dispatch addNumbersToState", () => {
      props.addNumbersToState();
      expect(dispatch).toHaveBeenCalledWith(addNumbersToState());
    });

    it("should dispatch clearRandomNumbers", () => {
      props.clearRandomNumbers();
      expect(dispatch).toHaveBeenCalledWith(clearRandomNumbers());
    });
  });
});
