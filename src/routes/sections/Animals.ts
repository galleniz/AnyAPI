import Auth from "../../iteractors/Auth";
import BearRoute from "../animals/Bear";
import BirdRoute from "../animals/Bird";
import CatRoute from "../animals/Cat";
import DogRoute from "../animals/Dog";
import FoxRoute from "../animals/Fox";
import KoalaRoute from "../animals/Koala";

import {AnimalsResult} from "../../utils/Interfaces"

export default class Animals {
  /**
   * Cool swag authenticator
   */
  authenticator: Auth;
  /**
   * creates a new animals interactor section
   * @param authenticator Cool swag auth
   */
  constructor(authenticator:Auth) {
    this.authenticator = authenticator;
  }

  /**
   * Get a bear image and a cool fact
   *
   */
  async bear():Promise<AnimalsResult | undefined> {
    const _bear = new BearRoute(this.authenticator);
    return await _bear.GET();
  }

  /**
   * Get a bird image and a cool fact
   *
   */
  async bird():Promise<AnimalsResult | undefined> {
    const _bird = new BirdRoute(this.authenticator);
    return await _bird.GET();
  }

  /**
   * Get a cat image and a cool fact
   *
   */
  async cat():Promise<AnimalsResult | undefined> {
    const _cat = new CatRoute(this.authenticator);
    return await _cat.GET();
  }

  /**
   * Get a dog image and a cool fact
   *
   */
  async dog():Promise<AnimalsResult | undefined> {
    const _dog = new DogRoute(this.authenticator);
    return await _dog.GET();
  }

  /**
   * Get a fox image and a cool fact
   *
   */
  async fox():Promise<AnimalsResult | undefined> {
    const _fox = new FoxRoute(this.authenticator);
    return await _fox.GET();
  }

  /**
   * Get a koala image and a cool fact
   *
   */
  async koala():Promise<AnimalsResult | undefined> {
    const _koala = new KoalaRoute(this.authenticator);
    return await _koala.GET();
  }
}

