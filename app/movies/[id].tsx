import { icons } from '@/constants/icons';
import { fetchMoviesDetails } from '@/services/api';
import useFetch from '@/services/use-fetch';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type MovieInfoProps = {
    label: string;
    value?: string | number | null;
}
const MovieInfo = ({ label, value }: MovieInfoProps) => (
    <View className='flex-col items-start justify-center mt-5'>
        <Text className='text-light-200 font-normal text-sm'>
            {label}
        </Text>
        <Text className='text-light-100 font-bold text-sm mt-2'>
            {value || 'N/A'}

        </Text>
    </View>
)

const Details = () => {
    const { id } = useLocalSearchParams();
    const { data: movie, loading, error } = useFetch(
        () => fetchMoviesDetails(id as string)
    );

    return (
        <View className='bg-primary flex-1'>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 80 }}
            >
                <View>
                    <Image
                        className='w-full h-[550px]'
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
                        resizeMode='stretch'
                    />
                </View>
                <View className='flex-col items-start justify-center mt-5 px-5'>
                    <Text className='text-white font-bold text-xl'>{movie?.title}</Text>
                    <View className='flex-row items-center gap-x-1 mt-2'>
                        <Text className='text-light-200 text-sm'>
                            {movie?.release_date}
                        </Text>
                        <Text className='text-light-200 text-sm'>
                            {movie?.runtime}m
                        </Text>
                    </View>
                    <View className='flex-row items-center bg-dark-100 px-2 py-1 gap-x-1  rounded-md mt-2'>
                        <Image
                            source={icons.star}
                            className='size-4'
                        />
                        <Text className='text-white font-bold text-sm'>
                            {Math.round(movie?.vote_average ?? 0)} / 10
                        </Text>
                        <Text className='text-light-200 text-sm'>
                            ({movie?.vote_count ?? 0}) votes
                        </Text>

                    </View>
                    <MovieInfo label='Overview' value={movie?.overview} />
                    <MovieInfo label='Genres' value={movie?.genres.map((genre) => genre.name).join(', ') || 'N/A'} />
                    <MovieInfo label='Release Date' value={movie?.release_date} />
                    <View className='flex-row justify-between w-1/2 '>
                        <MovieInfo label='Budget' value={movie?.budget ? `$${movie.budget / 1_000_000}M` : 'N/A'} />
                        <MovieInfo label='Revenue' value={movie?.revenue ? `$${Math.round(movie.revenue / 1_000_000)}M` : 'N/A'} />


                    </View>
                    <MovieInfo label='Production Campanies'
                        value={movie?.production_companies.map((company) => company.name).join(', ') || 'N/A'}
                    />


                </View>

            </ScrollView>
            <TouchableOpacity className='absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 felx flex-row items-center justify-center z-50'
                onPress={router.back}
            >
                <Image source={icons.arrow} className='size-5 mr-1 mt-0.5 rotate-180 '
                    tintColor={'#fff'}
                />
                <Text className='text-white font-semibold text-base flex'>
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details