import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateStockDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  ticker: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  currentPrice: number;
}
